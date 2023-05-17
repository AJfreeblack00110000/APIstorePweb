import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
public addproductForm!: FormGroup;

constructor(private fb: FormBuilder){}

ngOnInit(){
  this.addproductForm = this.fb.group({
    titulo: ['',Validators.required],
    precio: ['',Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)],
    categoria: ['',Validators.required],
    descripcion: ['',Validators.required],
    imagen: ['',Validators.required]
  })
}

guardar() {
  if (this.addproductForm.valid) {
    // Realizar acción de guardar
  } else {
    // Mostrar mensajes de validación
    this.addproductForm.markAllAsTouched();
  }
}

adjuntarImagen(event: any) {
  const file = event.target.files[0];
  this.addproductForm.patchValue({ imagen: file });
}

}
