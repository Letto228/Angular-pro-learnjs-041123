# DestroyRef. takeUntilDestroyed.

Раньше:

```ts
@Component({...})
export class MyComponent implements OnDestroy {
 readonly destroy$ = new Subject<void>();
 readonly someObservable$ = unknownObservable$
    .pipe(takeUntil(this.destroy$))
    .subscribe();
 
 ngOnDestroy() {
  this.destroy$.next()
  this.destroy$.complete()
 }
}
```

В лучшем случае:

```ts
@Component({
    ...,
    providers: [DestroyService]
})
export class MyComponent implements OnDestroy {
  readonly destroy$ = inject(DestroyService);
  readonly someObservable$ = unknownObservable$
    .pipe(takeUntil(this.destroy$))
    .subscribe();
}
```

C Angular 16:

```ts
@Component({...})
export class MyComponent {

  constructor() {
    unknownObservable$
        .pipe(takeUntilDestroyed()) // Аргумент в takeUntilDestroyed не передаем, т.к. находимся в Injection Context
        .subscribe();
  }
}
```

Или

```ts
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({...})
export class MyComponent {
  readonly destroyRef = inject(DestroyRef);

  ngOnInit() {
    unknownObservable$
        .pipe(takeUntilDestroyed(this.destroyRef)) // Нужно передать аргумент в takeUntilDestroyed, т.к. находимся вне Injection Context
        .subscribe();
  }
}
```

> takeUntilDestroyed использует под капотом `inject`, чтобы получить доступ к `DestroyRef` и подвязать на нем `takeUntil`
