
import { FinancialService } from './../../service/financial.service';
import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Observable } from 'rxjs';
import { modelCategory, modelMenu } from '../../models/financial.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    
    CommonModule,
    FormsModule,
    
    
    
    
    SidebarComponent,],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})


export class MenuComponent {
  checkboxChecked: boolean = true;
  menu$ = new Observable<modelMenu[]>;
  category$ = new Observable<modelCategory[]>;
  status: boolean = false;
  iMenu: any = {
    category: ''
  }
  item: any = {

    status: true 
  };

  id: any
  inputName = '';
  inputNameProduct = 'Novo Produto';
  close: boolean = true;
  categories: any[] = [





  ];
  categoriesName: any = {
    


  };
  categoryNamesMap: any = {};
  inputNumber: number = 0;
  inputCost: number = 0;
  alertaSucesso: boolean = false;
  alertError: boolean = false;
  error: string = '';
  profitMargin: number = 0;
  categorySelect: string = '';
  idMenu: number = 0;
  inputSearchProduct = '';
  filteredProducts: modelMenu[] = [];
  searchCheck: boolean = false;
  feedBack: string = '';

  constructor(private FinancialService: FinancialService){}
  ngOnInit(): void {
    this.getMenu();
    this.getCategory();
    console.log(this.inputSearchProduct)


  }


  getMenu() {
    this.menu$ = this.FinancialService.obterMenu();
    this.menu$.subscribe(response => {
      const uniqueCategories = Array.from(new Set(response.map(item => item.category)));
      const categories = uniqueCategories.map(categoryId => {
        const categoryName = response.find(item => item.category === categoryId)?.category_name || ''; 
        this.categoryNamesMap[categoryId] = categoryName; 
        return categoryId; 
      });
  
      response.forEach(data => {
        const cost: number = data.cost!;
        const price: number = data.price;
  
        if (cost > 0) {
          const calculate = ((price - cost) / cost) * 100;
          data.profitMargin = calculate;
          
          
        } else {
          data.profitMargin = 0;
   
        }
      });
  
      this.categories = categories; 

    });
  }
  
  searchProduct() {
    const productName = this.inputSearchProduct.trim().toLowerCase(); 
    if (!productName) {
        this.filteredProducts = [];
        return;
    }
    this.menu$.subscribe(response => {
        const filteredProducts = response.filter(item => item.name.toLowerCase().includes(productName));
        if (filteredProducts.length > 0){
          this.filteredProducts = filteredProducts
          this.searchCheck = true
        }else{
          this.feedBack = 'Produto não encontrado'
          this.alertError = true
          this.searchCheck = false
          setTimeout(() => {
            this.alertError = false;
          }, 4000);         
        }
        this.searchCheck = false
    });
}


  createCategoryMenu() {
    const newCategory: modelCategory = {
      id: this.id,
      name: this.inputName
    };
    this.FinancialService.createCategory(newCategory).subscribe({
      next: _ => {
        // Sucess
        this.feedBack = 'Categoria criada com sucesso!';
        this.alertaSucesso = true;
        this.closeModal();
        this.getCategory();
        setTimeout(() => {
          this.alertaSucesso = false;
        }, 4000);
      },
      error: _ => {
        // Error
        this.feedBack = 'Ocorreu um erro ao criar a categoria';
        this.alertError = true;
        this.closeModal();
        setTimeout(() => {
          this.alertError = false;
        }, 4000);
      }
    });
  }

deleteCategoryMenu(id: number) {
  this.FinancialService.deleteCategory(id).subscribe(_ => this.getMenu)
}

createProductMenu() {
  const newProduct: modelMenu = {
    name: this.inputNameProduct,
    price: this.inputNumber,
    status: true,
    category: this.categorySelect,
    cost: this.inputCost
  };

  this.FinancialService.createProduct(newProduct)
    .subscribe({
    next:_ =>{ 
      this.closeModal();
      this.feedBack = 'Produto criado com sucesso!'
      this.alertaSucesso = true;
      this.getMenu();
      this.getCategory();

    setTimeout(() => {
      this.alertaSucesso = false;
    }, 4000);
   },
   error: _ => {
    // Error
    this.feedBack = 'Ocorreu um erro ao criar Produto';
    this.alertError = true;
    this.closeModal();
    setTimeout(() => {
      this.alertError = false;
    }, 4000);
  }
});

}


updateProduct(item: modelMenu) {
  const updatedMenu: modelMenu = {
  id: item.id,
  name: item.name,
  category: this.categorySelect,
  price: item.price,
  cost: item.cost,
  status: true
};



  this.FinancialService.updateProduct(updatedMenu).subscribe(response => {
    console.log('Product updated successfully:', response);
  }, error => {
    console.error('Error updating product:', error);
  });
}
  
  onCheckboxChange(event: any, menu: modelMenu) {
    if (event.target.checked) {
      menu.status = true;
    } else {
      menu.status = false;
    }
    this.FinancialService.updateMenuItemStatus(menu)
      .subscribe(
        response => {
          console.log('Status atualizado com sucesso');
        },
        error => {
          
        }
      );
  }

  clearFields(){
    this.inputNameProduct='';



  }

  getCategory(){
    this.category$ = this.FinancialService.getListCategory();
    this.category$.subscribe(response => {
      console.log('to aqui categoria',response)
      




    })

  }



  deleteProduct(id: number) {
    this.FinancialService.deleteProduct(id).subscribe(_ => {
      this.closeModal();
  
    });
  }

  closeModal(){
    const closeButton = document.querySelector('.close') as HTMLElement;

      if (closeButton) {
        closeButton.click();
      }


  }



}