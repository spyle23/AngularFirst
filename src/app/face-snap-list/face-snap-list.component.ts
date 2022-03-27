import { Component, OnInit } from '@angular/core';
import { FaceSnap } from "../models/Face-Snap.models";
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnap!:FaceSnap[];
  constructor(private FaceSnapService : FaceSnapService) { }

  ngOnInit(): void {
    this.faceSnap = this.FaceSnapService.getAll();
  }
}
