import { Controller, Post, Body, Get , Param, Patch, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private readonly productService: ProductsService){}

    @Post()
    addProduct(
        @Body('title') prodTitle: string, 
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number
    ): any {
        const id = this.productService.insertProduct(prodTitle, prodDesc, prodPrice);
        return { 
            success: true,
            id: id };
    }

    @Get()
    getAllProducts() {
        let products = this.productService.getAllProducts();
        return {
            success: true,
            data: products
        }
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string) {
        const product = this.productService.getProduct(prodId);
        return {
            success: true,
            data: product
        }
    }

    @Patch(':id')
    updateProduct(
        @Param('id') prodId: string,
        @Body('title') prodTitle: string, 
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number
    ) {
        let updatedProduct = this.productService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
        return {
            success: true,
            data: updatedProduct
        }
    }

    @Delete(':id')
    deleteProduct(@Param('id') prodId: string) {
        const product = this.productService.deleteProduct(prodId);
        return {
            success: true,
            data: [],
            message: "Product deleted successfully"
        }
    }
}