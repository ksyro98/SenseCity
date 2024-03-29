import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AlertService } from '../../view-utils/alert-service/alert.service';
import {LocalTranslateService} from '../../view-utils/local-translate-service/local-translate.service';
import {RequestLocation} from '../../entities/RequestLocation';

@Component({
  selector: 'app-neighborhood-map',
  templateUrl: './neighborhood-map.component.html',
  styleUrls: ['./neighborhood-map.component.scss'],
})
export class NeighborhoodMapComponent implements OnInit {

  @Input() neighborhood: RequestLocation;
  @Output() locationChange = new EventEmitter<RequestLocation>();
  @Output() registerNeighborhood = new EventEmitter<void>();
  @Output() unregisterNeighborhood = new EventEmitter<void>();

  receiveMessages = 'Ναι, θέλω να λαμβάνω ενημερώσεις για το σημείο ενδιαφέροντος που δήλωσα στον χάρτη!';
  delete = 'Διαγραφή';
  register = 'Καταχώρηση';
  deleteNeighborhoodHead = 'Διαγραφή Γειτονιάς';
  deleteNeighborhoodBody = 'Είσαι σίγουρος ότι θέλεις να σταματήσετε να λαμβάνετε μηνύματα για αυτή τη γειτονιά;';

  constructor(private alertService: AlertService, private localTranslateService: LocalTranslateService) {
    this.setTranslationPairs();
  }

  ngOnInit() {
    this.localTranslateService.translateLanguage();
  }

  async addNeighborhood(){
    this.registerNeighborhood.emit();
  }

  removeNeighborhood(){
    this.showRemoveAlert(() => this.unregisterNeighborhood.emit());
  }

  showRemoveAlert(callback: () => void){
    const content = {
      head: this.deleteNeighborhoodHead,
      body: this.deleteNeighborhoodBody,
    };
    this.alertService.show(
        content,
        callback,
        true
    );
  }

  onLocationChange(location){
    this.locationChange.emit(location);
  }

  private setTranslationPairs(){
    this.localTranslateService.pairs.push({key: 'receive-messages', callback: (res: string) => this.receiveMessages = res});
    this.localTranslateService.pairs.push({key: 'delete', callback: (res: string) => this.delete = res});
    this.localTranslateService.pairs.push({key: 'register', callback: (res: string) => this.register = res});
    this.localTranslateService.pairs.push({key: 'delete-neighborhood-head', callback: (res: string) => this.deleteNeighborhoodHead = res});
    this.localTranslateService.pairs.push({key: 'delete-neighborhood-body', callback: (res: string) => this.deleteNeighborhoodBody = res});
  }
}
