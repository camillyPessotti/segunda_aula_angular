import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutosComponent } from './produtos/produtos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaginaPrincipalComponent, ProdutoComponent, ProdutosComponent]
})
export class LojaModule { }
