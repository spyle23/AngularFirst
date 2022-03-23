import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/Face-Snap.models';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnaps!:FaceSnap;

  ngOnInit(): void {

  }

}
