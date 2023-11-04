/* --------------zone.js--------------------- */
function patchSetTimeout() {
    const oldSetTimeout = setTimeout;

    setTimeout = (cb, timer) => {
        console.log('START');

        oldSetTimeout(() => {
            cb();
            console.log('FINISH!');
        }, timer)
    }
}

patchSetTimeout();

/* ---------------my logic------------------- */
setTimeout(_ => {
    console.log('DONE');
}, 3000);