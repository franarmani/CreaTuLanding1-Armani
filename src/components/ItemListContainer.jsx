import './ItemListContainer.css'; 
import PropTypes from 'prop-types'; 


const products = [
  {
    id: 1,
    name: 'Datejust 36',
    price: '$USD 12,750',
    image: 'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_800/v1/catalogue/2024/upright-c/m126234-0051',
    description: 'Oyster, 36 mm, acero Oystersteel y oro blanco'
  },
  {
    id: 2,
    name: 'Submariner',
    price: '$USD 11,000',
    image: 'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_800/v1/catalogue/2024/upright-c/m124060-0001',
    description: 'Oyster, 41 mm, acero Oystersteel'
  },
  {
    id: 3,
    name: 'GMT-Master II',
    price: '$USD 12,900',
    image: 'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_800/v1/catalogue/2024/upright-c/m126710grnr-0004',
    description: 'Oyster, 40 mm, acero Oystersteel.'
  },
  {
    id: 4,
    name: 'Day-Date 40',
    price: '$USD 63,100',
    image: 'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_800/v1/catalogue/2024/upright-c/m228235-0055',
    description: 'Oyster, 40 mm, oro Everose.'
  },
  {
    id: 5,
    name: 'Cosmograph Daytona',
    price: '$USD 64,600',
    image: 'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_800/v1/catalogue/2024/upright-c/m126509-0001',
    description: 'Oyster, 40 mm, oro blanco.'
  },
  {
    id: 6,
    name: 'Oyster Perpetual 41',
    price: '$USD 7,750',
    image: 'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_800/v1/catalogue/2024/upright-c/m124300-0001',
    description: 'Oyster, 41 mm, acero Oystersteel.'
  },
  {
    id: 7,
    name: 'Yacht-Master 42',
    price: '$USD 17,000',
    image: 'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_800/v1/catalogue/2024/upright-c/m226627-0001',
    description: 'Oyster, 42 mm, titanio RLX.'
  },
  {
    id: 8,
    name: 'Sea-Dweller',
    price: '$USD 27,100',
    image: 'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_800/v1/catalogue/2024/upright-c/m126603-0001',
    description: 'Oyster, 43 mm, acero Oystersteel y oro amarillo.'
  },
  {
    id: 9,
    name: 'Rolex Deepsea',
    price: '$USD 79,100',
    image: 'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_800/v1/catalogue/2024/upright-c/m136668lb-0001',
    description: 'Oyster, 44 mm, oro amarillo.'
  },
  {
    id: 10,
    name: 'Air-King',
    price: '$USD 9,000',
    image: 'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_800/v1/catalogue/2024/upright-c/m126900-0001',
    description: 'Oyster, 40 mm, acero Oystersteel.'
  },
  {
    id: 11,
    name: 'Explorer 36',
    price: '$USD 17,600',
    image: 'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_800/v1/catalogue/2024/upright-c/m126900-0001',
    description: 'Oyster, 36 mm, acero Oystersteel y oro amarillo.'
  },
  {
    id: 12,
    name: 'Sky-Dweller',
    price: '$USD 78,800',
    image: 'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_800/v1/catalogue/2024/upright-c/m336935-0008',
    description: 'Oyster, 42 mm, oro Everose.'
  },
];


const ItemListContainer = ({ message }) => {
  return (
    <div className="item-list-container">
      <div className="new-drop-text-container">
        <h2 className="new-drop-text">{message}</h2>
      </div>

      <div className="drops-container">
        {products.map((product) => (
          <div className="drop-item" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="description">{product.description}</p>
            <p className="price">{product.price}</p>
            <button className="btn-buy">Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

ItemListContainer.propTypes = {
  message: PropTypes.string.isRequired, 
};

export default ItemListContainer;