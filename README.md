```bash
ng serve
```
### Directive
A Directive in Angular is a class that changes the appearance, behavior, or layout of elements dynamically.

- ***Component Directives:*** A Component is a special type of directive that has a template and is used to build UI views. Components have their own templates, styles, and logic.


- ***Structural Directives:*** Structural Directives are Angular directives that change the structure of the DOM by adding or removing elements using *ngIf, *ngFor, or *ngSwitch.


- ***Attribute Directives:*** Attribute Directives are used to change the appearance or behavior of DOM elements in Angular by modifying their attributes or styles using ngClass, ngStyle, or ngModel.

### We can create Custom Directive using Angular CLI:
```
ng generate directive directive_name
```

### So, we can create Custom Directive for highlight using Angular CLI:
```
ng generate directive highlight
```

A ***custom directive*** is created with the ```@Directive``` decorator, where the ***selector*** ```[appHighlight]``` is defined. It can then be used in the host element as an attribute.

```
import { Directive } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight {

  constructor() { }

}
```

