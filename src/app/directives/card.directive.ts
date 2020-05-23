import { Directive } from "@angular/core";

@Directive({
  selector: "[appCard]",
  host: {
    "[style.box-shadow]": '" 2px 2px 4px rgba(0, 0, 0, 0.15)"',
    "[style.padding]": '"15px"',
  },
})
export class CardDirective {
  constructor() {}
}
