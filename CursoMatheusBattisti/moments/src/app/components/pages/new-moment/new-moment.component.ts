import { Component } from '@angular/core';
import { Moment } from '../../../Moment';
import { Router } from '@angular/router';

import { MomentService } from '../../../services/moment.service';
import { MessagesService } from '../../../services/messages.service';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.css'
})
export class NewMomentComponent {
  btnText:String = 'Compartilhar!'

  constructor(private momentService:MomentService, private messagesService:MessagesService, private router:Router){}

  async createHandler(moment:Moment){
    const formdata = new FormData()

    formdata.append('title',moment.title)
    formdata.append('description',moment.description)
    formdata.append('image',moment.image)

    //enviar dados para service
    await this.momentService.createMoment(formdata).subscribe()

    //exibir msg
    this.messagesService.add('Momento Adcionado com sucesso!')
    
    //redirect para outra pagina
    this.router.navigate(['/'])

  }
}
