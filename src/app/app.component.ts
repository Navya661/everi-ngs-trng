import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export class AppComponent {
 
//   NamFomVar = {
//     NamVak: "",
//     PrdVak: "",
//     CstVak: 0,
   
//   };

//   prodAryVar!:any

//   constructor(public httpConnection: HttpClient) {
//     this.httpConnection.get("http://localhost:8000/prod")
// 		.subscribe(
// 			ResRsgVar =>
// 			{
// 				console.log(ResRsgVar)
//         this.prodAryVar=ResRsgVar
// 			}) 
//     }

//   getProdFnc()
//     {
//       this.httpConnection.get("http://localhost:8000/prod")
//       .subscribe(
//         ResRsgVar =>
//         {
//           console.log(ResRsgVar)
//           this.prodAryVar = ResRsgVar
//         })
//     }
   
//     AddProd(NamFomVav:NgForm)
//     {
//       this.httpConnection.post(
//         "http://localhost:8000/prod",
//         this.NamFomVar
//       )
//           .subscribe(
//             ResRsgVar =>
//             {
//               console.log(ResRsgVar)
//               this.getProdFnc()
//             })
//     }
//     EdtIdxVar = -1;
//     UidVak1!:number;

//     editRow(index: number) {
//       const selectedRow = this.prodAryVar[index];
//       this.NamFomVar.NamVak = selectedRow.NamCol;
//       this.NamFomVar.PrdVak = selectedRow.ProdCol;
//       this.NamFomVar.CstVak = selectedRow.Cost;
//       this.UidVak1=selectedRow.UidVak;
//       this.EdtIdxVar = index;
//     }
   
//     UptBtnFnc(index: number) {
//       if (this.EdtIdxVar >= 0) {
//         const updatedRow = this.prodAryVar[index];
//         updatedRow.NamCol = this.NamFomVar.NamVak;
//         updatedRow.ProdCol = this.NamFomVar.PrdVak;
//         updatedRow.Cost = this.NamFomVar.CstVak;
   
//         this.httpConnection.put(`http://localhost:8000/prod/${this.UidVak1}`, this.NamFomVar)
//           .subscribe({
//             next: (ResRsgVar: any) => {
//               console.log('Updated:', ResRsgVar);
//               this.getProdFnc();
//               this.resetForm();
//               this.EdtIdxVar = -1;
//             },
//             error: (err) => {
//               console.error('Error occurred:', err);
//             }
//           });
   
        
//       }
//     }
   
    // deleteRow(index: number, UidVak: number) {
    //   if (confirm("Do you really want to delete?")) {
    //     this.httpConnection.delete(`http://localhost:8000/prod/${UidVak}`)
    //       .subscribe({
    //         next: (ResRsgVar: any) => {
    //           console.log('Deleted:', ResRsgVar);
    //           this.getProdFnc(); // Refresh the list after deletion
    //         },
    //         error: (err) => {
    //           console.error('Error occurred:', err);
    //         }
    //       });
    //   }
    // }
   
  //   resetForm() {
  //     this.NamFomVar = {
  //       NamVak: "",
  //       PrdVak: "",
  //       CstVak: 0
  //     };
  //     this.EdtIdxVar = -1;
  //   }
  // }

   
//     isUpdate = false;

//     editProduct(prod: any) {
//       this.NamFomVar = { ...prod }; // Copy the product to the form
//       this.isUpdate = true; // Set flag to true for update mode
//     }

//     updateProd()
//     {
//       this.httpConnection.put(
//         "http://localhost:8000/prod",
//         this.NamFomVar
//       )
//           .subscribe(
//             ResRsgVar =>
//             {
//               console.log(ResRsgVar)
//               this.getProdFnc();
//               this.resetForm();
//             });
//     }
//     resetForm() {
//       this.NamFomVar = {
//         NamVak: "",
//         PrdVak: "",
//         CstVak: 0,
        
//       };
//       this.isUpdate=false;


 
//   // verifyTable = [
//   //   { "NamVak": "Sriya", "prod": "Tesla Ev Car", "cost": 5000000 },
//   //   { "NamVak": "Navya", "prod": "Tesla Ev Car", "cost": 10000000 },
//   //   { "NamVak": "serena", "prod": "iphone 20", "cost": 400000 },
//   //   { "NamVak": "jayanth", "prod": "HP Envy 390", "cost": 40000 }
//   // ];
 
//   // EdtIdxVar = -1;
 
//   // editRow(index: number) {
//   //   const selectedRow = this.verifyTable[index];
//   //   this.NamFomVar.NamIptVak = selectedRow.NamVak;
//   //   this.NamFomVar.prod = selectedRow.prod;
//   //   this.NamFomVar.cost = selectedRow.cost;
//   //   this.EdtIdxVar = index;
//   // }
 
//   // deleteRow(index: number) {
//   //   if (confirm("Do you really want to delete?")) {
//   //     this.verifyTable.splice(index, 1);
//   //   }
//   // }
 
//   // UptBtnFnc() {
//   //   if (this.EdtIdxVar >= 0) {
//   //     this.verifyTable[this.EdtIdxVar] = {
//   //       NamVak: this.NamFomVar.NamIptVak,
//   //       prod: this.NamFomVar.prod,
//   //       cost: this.NamFomVar.cost
//   //     };
//   //     this.EdtIdxVar = -1;
//   //     this.resetForm();
//   //   }
//   // }
 
//   // resetForm() {
//   //   this.NamFomVar = {
//   //     NamIptVak: "",
//   //     prod: "",
//   //     cost: 0
//   //   };
//   // }
// }
// }

export class AppComponent {
  NamFomVar = {
    NamVak: "",
    PrdVak: "",
    CstVak: 0
  };
  prodAryVar!: any
  EdtIdxVar = -1;
  editingProdId!: number;

  constructor(public httpConnection: HttpClient) {
    this.getProdFnc();
  }

  getProdFnc() {
    this.httpConnection.get("http://localhost:8000/prod")
      .subscribe({
        next: (ResRsgVar: any) => {
          // console.log('Products:', ResRsgVar);
          this.prodAryVar = ResRsgVar;
          console.log(this.prodAryVar);
        },
        error: (err) => {
          console.error('Error occurred:', err);
        }
      });
  }

  AddProdFnc(NamFomVar: NgForm) {
    // console.log('Form Data:', this.NamFomVar);
    this.httpConnection.post(
      "http://localhost:8000/prod",
      this.NamFomVar
    ).subscribe({
      next: (ResRsgVar: any) => {
        console.log('Response:', ResRsgVar);
        this.getProdFnc(); // Refresh the product list
        this.resetForm();
      },
      error: (err) => {
        console.error('Error occurred:', err);
      }
    });
  }

  editRow(index: number) {
    const selectedRow = this.prodAryVar[index];
    this.NamFomVar.NamVak = selectedRow.NamCol;
    this.NamFomVar.PrdVak = selectedRow.ProdCol;
    this.NamFomVar.CstVak = selectedRow.Cost;
    this.editingProdId=selectedRow.UidCol;
    this.EdtIdxVar = index;
  }

  UptBtnFnc() {
    // if (this.EdtIdxVar >= 0) {
    //   const updatedRow = this.prodAryVar[index];
    //   updatedRow.NamCol = this.NamFomVar.NamVak;
    //   updatedRow.ProdCol = this.NamFomVar.PrdVak;
    //   updatedRow.Cost = this.NamFomVar.CstVak;
 
      this.httpConnection.put(`http://localhost:8000/prod/${this.editingProdId}`, this.NamFomVar)
        .subscribe({
          next: (ResRsgVar: any) => {
            console.log('Updated:', ResRsgVar);
            this.getProdFnc();
            this.resetForm();
            this.EdtIdxVar=-1;
          },
          error: (err) => {
            console.error('Error occurred:', err);
          }
        });

    
  }

 

  DeleteProdFnc(id: number) {
    console.log('Deleting product with id:', id);
    // var indexValue =  this.prodAryVar[id];
    // console.log(indexValue)
    this.httpConnection.delete(`http://localhost:8000/prod/${id}`).subscribe({
      next: (ResRsgVar: any) => {
        // console.log('Delete Response:', ResRsgVar);
        this.getProdFnc(); // Refresh the product list
      },
      error: (err) => {
        console.error('Error occurred:', err);
      }
    });
  }

  resetForm() {
    this.NamFomVar = {
      NamVak: "",
      PrdVak: "",
      CstVak: 0
    };
  }

}
 