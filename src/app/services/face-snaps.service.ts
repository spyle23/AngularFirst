import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/Face-Snap.models";
/* on implémente ici le service qui partagera les données à tous les components */
@Injectable({                   //décorateur pour le service , il est importé depuis angular/core
    providedIn: 'root'          //enregistrement du service à la racine
})
//implémentation de FaceSnapService
export class FaceSnapService{
    /* on met ici tous les données nécessaires au service ainsi qu'au restes des components qui ont en besoin */
    faceSnap: FaceSnap[] = [
        {
          id:1,
          title: 'Archibald',
          description: 'Mon meilleur ami depuis tout petit !',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          createdDate: new Date(),
          snaps: 0,
          location: 'Paris'
        },
        {
          id:2,
          title: 'Three Rock Mountain',
          description: 'Un endroit magnifique pour les randonnées.',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
          createdDate: new Date(),
          snaps: 0,
          location: 'la montagne'
        },
        {
          id:3,
          title: 'Un bon repas',
          description: 'Mmmh que c\'est bon !',
          imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
          createdDate: new Date(),
          snaps: 0
        }
      ]
      getAll() : FaceSnap[]{
          return this.faceSnap;
      }
      /* la méthode getFaceSnapById permet de récuperer le snap si l'id en question est conforme*/
      getFaceSnapById(faceSnapId: number): FaceSnap{
        const idFace = this.faceSnap.find(faceSnaps => faceSnaps.id === faceSnapId);
        if(!idFace){        //on vérifie si le facesnap n'existe pas alors on retourne une erreur
          throw new Error("faceSnap not found");
        }
        else{
          return idFace;
        }
      }
      actionSnapById(faceSnapId :number, snapType: "j'aime" | "je n'aime plus"): void{
        const idFace = this.getFaceSnapById(faceSnapId);
        snapType === 'j\'aime'? idFace.snaps++ : idFace.snaps--;
      }
}