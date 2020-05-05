import {
  Directive,
  HostBinding,
  Input,
  HostListener,
  Output,
  EventEmitter,
} from "@angular/core";

@Directive({
  selector: "[highlighted]",
  exportAs: "hl",
})
export class HighlightedDirective {
  @Input("highlighted")
  isHighlighted = false;

  @Output()
  toggleHighlight = new EventEmitter();

  constructor() {
    console.log("highlighted");
  }

  //  @HostBinding("className")
  //  get cssClasses(){
  //    return "highlighted"
  //  }
  // same
  @HostBinding("class.highlighted")
  get cssClasses() {
    return this.isHighlighted;
  }

  @HostListener("mouseover", ["$event"])
  mouseOver($event) {
    this.isHighlighted = true;
    this.toggleHighlight.emit(this.isHighlighted);
  }
  @HostListener("mouseleave")
  mouseLeave() {
    this.isHighlighted = false;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  toggle() {
    console.log('toggler');

    this.isHighlighted = !this.isHighlighted;
    this.toggleHighlight.emit(this.isHighlighted);
  }

  // @HostBinding("attr.disabled")
  // get disabled() {
  //   return true;
  // }
}
