import { Component, OnInit } from '@angular/core';
import { fabric } from 'fabric';

@Component({
  selector: 'app-event-editor-test',
  templateUrl: './event-editor-test.component.html',
  styleUrl: './event-editor-test.component.sass'
})

export class EventEditorTestComponent implements OnInit {
  canvas!: fabric.Canvas;

  ngOnInit(): void {
    this.canvas = new fabric.Canvas('myCanvas');

    // button listener to add a table
    const addTableLink = document.getElementById('addTable');
    if (addTableLink) {
      addTableLink.addEventListener('click', (event) => {
        event.preventDefault();
        this.addTable();
      });
    }

    const addCircTableLink = document.getElementById('addCircTable');
    if (addCircTableLink) {
      addCircTableLink.addEventListener('click', (event) => {
        event.preventDefault();
        this.addCircTable();
      });
    }
  }

  addTable():void {
    const rect = new fabric.Rect({
      left: 150,
      top: 100,
      fill: 'black',
      width: 50, 
      height: 100
    });
    
    this.canvas.add(rect);
  }
  
  addCircTable():void {
    const circ = new fabric.Circle({
      left: 600,
      top: 110,
      fill: 'black',
      radius: 40
    });
    
    this.canvas.add(circ);
  }
}
