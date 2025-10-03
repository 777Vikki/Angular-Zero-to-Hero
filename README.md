# Component

Component is a special type of directive that has a template and is used to build UI views. Components have their own templates, styles and logic.

### We can create component using Angular CLI:
```
ng generate component component_name
```

### So, we can create user component using Angular CLI:
```
ng generate component user
```
Angular creates user component with @Component Decorator.

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {

}
```
- ***Selector:*** The selector is the custom HTML tag name we use to render this component in application.

- ***templateUrl:*** Points to an external HTML file that defines the UI (view) of the component.

- ***styleUrls:*** Points to one or more external CSS/SCSS files that define styles for this component.

### We can use Inline Template & Style:
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <h2>Hello, Angular User!</h2>
    <p>This is an inline template.</p>
    <button>Click Me</button>
  `,
  styles: [`
    h2 {
      color: blue;
    }
    p {
      font-size: 14px;
      color: green;
    }
    button {
      background-color: orange;
      color: white;
      border: none;
      padding: 8px 12px;
      border-radius: 4px;
      cursor: pointer;
    }
  `]
})
export class UserComponent {}
```

