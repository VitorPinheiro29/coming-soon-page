import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'coming-soon-template';

  ngOnInit(): void {
    let descriptionText = document.querySelector(".description");
    setTimeout(() => {
      this.typeWriter(descriptionText);
    }, 2600)
  }

  typeWriter(element) {
    element.style.display = 'block';
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';

    textArray.forEach((letter, index) => {
      setTimeout(() => {
        element.innerHTML += letter;
      }, 90 * index)
    })
  }
}
