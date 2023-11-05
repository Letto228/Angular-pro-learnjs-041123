```ts
@Component({
        selector: 'datepicker',
        template: '...',
        standalone: true,
        providers: [CalendarService],
})
class DatePickerComponent {
  constructor(private calendar: CalendarService) {}
}

@Component({
        selector: 'date-modal',
        template: '<datepicker></datepicker>',
        standalone: true,
        imports: [DatePickerComponent]
})
class DateModalComponent {
}
```