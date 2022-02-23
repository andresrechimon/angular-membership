import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
  listCards: any[] = [
    {holder: 'Correa, Fátima', cardNumber: '5486157845481544', expiration: '11/23', cvv: '548'},
    {holder: 'Rechimon, Andrés', cardNumber: '1523546518481587', expiration: '11/24', cvv: '777'}
  ];

  form:FormGroup

  constructor(private fb:FormBuilder, private toastr: ToastrService) { 
    this.form = this.fb.group({
      holder: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      expiration: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvv: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
    })
  }

  ngOnInit(): void {
  }

  addCard(){
    const card:any = {
      holder: this.form.get('holder')?.value,
      cardNumber: this.form.get('cardNumber')?.value,
      expiration: this.form.get('expiration')?.value,
      cvv: this.form.get('cvv')?.value
    }
    this.listCards.push(card);
    this.toastr.success('¡Angular tiene un dev más en sus filas!', 'Socio Registrado');
    this.form.reset();
  }

  deleteCard(index:number){
    this.listCards.splice(index, 1);
    this.toastr.error('El socio fue dado de baja con éxito', '¡Soldado caído!');
  }

}
