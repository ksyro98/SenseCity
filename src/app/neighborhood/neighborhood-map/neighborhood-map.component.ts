import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../view-utils/alert-service/alert.service';
import { Plugins } from '@capacitor/core';

const { Toast } = Plugins;

@Component({
  selector: 'app-neighborhood-map',
  templateUrl: './neighborhood-map.component.html',
  styleUrls: ['./neighborhood-map.component.scss'],
})
export class NeighborhoodMapComponent implements OnInit {

  constructor(private alertService: AlertService) { }

  ngOnInit() {
  }

  async addNeighborhood(){
    await Toast.show({
      text: 'Η γειτονια σας ανανεωθηκε!'
    });
  }

  removeNeighborhood(){
    this.showRemoveAlert(() => {});
  }

  showRemoveAlert(callback: () => void){
    const content = {
      head: 'Διαγραφή Γειτονιάς',
      body: 'Είσαι σίγουρος ότι θέλεις να σταματήσετε να λαμβάνετε μηνύματα για αυτή τη γειτονιά;',
    };
    this.alertService.showAlert(
        content,
        callback,
        true
    );
  }
}
