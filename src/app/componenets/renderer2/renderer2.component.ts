import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-renderer2',
  templateUrl: './renderer2.component.html',
})
export class Renderer2Component implements OnInit, AfterViewInit{
  @ViewChild('painters') span: ElementRef;

  painters = ['Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso', 'Michelangelo', 'Rembrandt', 'Claude Monet'];

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    const ul = this.renderer.createElement('ul');
    this.renderer.appendChild(this.elementRef.nativeElement, ul);

    this.painters.forEach((painter, index)=> {
      const li = this.renderer.createElement('li');
      const liText = this.renderer.createText(painter);
      this.renderer.appendChild(li, liText);
      index % 2 === 0
        ? this.renderer.setStyle(li, 'color', '#F08080')
        : this.renderer.setStyle(li, 'color', '#48D1CC')
      this.renderer.appendChild(ul, li);
    })
  }

  ngAfterViewInit() {
    this.renderer.setStyle(this.span.nativeElement, 'color', '#48D1CC');
  }
}
