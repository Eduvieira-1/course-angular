import { FormControl, ReactiveFormsModule, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {

  #fb = inject(FormBuilder)

  // constructor(private _fb: FormBuilder){}

  name = new FormControl('');

  public updateName(){
    this.name.setValue('Maria')
  }

  // MODO COM INJECT DE FORMS
  public profileForm = this.#fb.group({
    name: [''],
    myStacks: this.#fb.group({
      front: ['Angular'],
      back: ['NodeJs']
    }),

    myFavoriteFoods: this.#fb.array([
      ['Angular']
    ])
  })

  // MODO COM BUILDER DO CONSTRUTOR FORMS
  // public profileForm = this._fb.group({
  //   name: [''],
  //   myStacks: this._fb.group({
  //     front: ['Angular'],
  //     back: ['NodeJs']
  //   }),

  //   myFavoriteFoods: this._fb.array([
  //     ['Angular']
  //   ])
  // })


  // MODO SIMPLES FORMS
  // public profileForm = new FormGroup({
  //   name: new FormControl(''),
  //   myStacks: new FormGroup({
  //     front: new FormControl('Angular'),
  //     back: new FormControl('NodeJs')
  //   }),

  //   myFavoriteFoods: new FormArray([
  //     new FormControl('Angular')
  //   ])
  // })


  public update(){
    this.profileForm.patchValue({
      name: 'Maria',
      myStacks: {
        front: 'Vue',
        back: 'NestJs'
      }
    });
  }

  public addMyFavoriteFood(newFood: string){
    const myFavoriteFoods = this.profileForm.get('myFavoriteFoods') as FormArray;
    const addNewFood = new FormControl(newFood);

    myFavoriteFoods.push(addNewFood);
  }
}
