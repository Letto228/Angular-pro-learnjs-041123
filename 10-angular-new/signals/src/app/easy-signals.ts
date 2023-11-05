type EasySignal<T> = (() => T);

interface EasyWritableSignal<T> extends EasySignal<T> { 
    set(value: T): void;
    [nodeKey]: EasySignalNode<T>;
}

interface EasySignalNode<T> {
    value: T;
    dependentConsumers: EasyConsumer[];
    equal: (firstValue: T, secondValue: T) => boolean;
}

interface EasyConsumer {
    cb: () => void;
}

const nodeKey = '_node';
const equal = <T>(firstValue: T, secondValue: T) => firstValue == secondValue;

let activeConsumer: EasyConsumer | null = null;

export function easySignal<T>(initialValue: T, equalFn?: EasySignalNode<T>['equal']): EasyWritableSignal<T> {
    const node: EasySignalNode<T> = {
        value: initialValue,
        dependentConsumers: [],
        equal: equalFn || equal,
    };

    function signalFn() {
        if (activeConsumer) {
            node.dependentConsumers.push(activeConsumer);
        }

        return node.value;
    }

    signalFn.set = signalSetFunction;
    signalFn[nodeKey] = node;

    return signalFn;
}

function signalSetFunction<T>(this: EasyWritableSignal<T>, newValue: T) {
    const node = this[nodeKey];

    if (!node.equal(node.value, newValue)) {
        node.value = newValue;

        signalValueChanged(node);
    }
}

function signalValueChanged<T>(node: EasySignalNode<T>): void {
    setTimeout(() => {
        node.dependentConsumers.forEach(consumer => {
            consumer.cb();
        });
    })
}

export function easyEffect(effectFn: () => void): EasyConsumer {
    const cunsumer: EasyConsumer = {cb: effectFn};

    activeConsumer = cunsumer;

    effectFn();

    activeConsumer = null;

    return cunsumer;
}
