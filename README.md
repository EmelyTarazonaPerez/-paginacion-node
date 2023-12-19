# Descripcion del proyecto :sparkling_heart:	

- Project created using pagination and product classification enpoint

## Enpoint created :point_down:	
| Enpoint | Description |
| --- | --- |
| GET  | http://localhost:4000/products/filter |
| GET  | http://localhost:4000/classifications |

### Vista postman
- example enpoint `http://localhost:4000/api/v1/products?page=2&classifications=perros,gatos`
  
```
[
    {
        "detail": "null",
        "name": "ALIMENTO PARA GATO CHUNKY MINIS Y PEQUEÑOS BULTO (47.8 KG)",
        "price": 296757,
        "image": "https://vetmasagro.com/wp-content/uploads/2021/07/SALMON-CORDERO.png",
        "nameClassification": "gatos"
    },
    {
        "detail": "null",
        "name": "ALIMENTO PARA GATO ONE MINIS Y PEQUEÑOS BULTO (47.8 KG)",
        "price": 297757,
        "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCxLB860PB//2Q==",
        "nameClassification": "gatos"
    }
    {
        "detail": "null",
        "name": "ALIMENTO PARA GATO DIAMOND NATURALS MINIS Y PEQUEÑOS BULTO (47.8 KG)",
        "price": 298757,
        "image": "https://dojiw2m9tvv09.cloudfront.net/11787/product/diamond-naturals-indoor-cat-chicken-rice-7-5kg2536.jpg",
        "nameClassification": "gatos"
    },
]
```
