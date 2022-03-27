import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/Face-Snap.models';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnaps!:FaceSnap;     //injéction des models depuis les parents 

  constructor(private faceSnapService: FaceSnapService){};    //injéction de service dans le component faceSnap component

  buttonText!:string;

  ngOnInit(): void {
    this.buttonText = "j'aime";
  }
  onSnap(){
    if (this.buttonText === "j'aime") {
      this.faceSnapService.actionSnapById(this.faceSnaps.id, "j'aime");
      this.buttonText = "je n'aime plus";
    }
    else{
      this.faceSnapService.actionSnapById(this.faceSnaps.id, "je n'aime plus");
      this.buttonText ="j'aime";
    }
  }

}
