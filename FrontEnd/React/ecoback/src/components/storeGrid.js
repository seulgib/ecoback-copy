import '../seulgi/productCategories.css'
import {Link} from 'react-router-dom';
//상품 카테고리 누르면 상세 페이지로 이동


function Store({ product }) {
  const containerStyle = {
    width: '10%', 
    display:'flex',
    margin:'0vw 0vw 0vw 10%',
    flexDirection:'column',
    alignItems:'center',

};
  return (
    <div style={containerStyle}>
      <Link to="/products">
      <div className="box_categories_m">
      <img src={require(`../image/categories/${product.image}`)} alt={product.name}
      style={{ width:"50%", margin:"7%"}} />
      </div>
      </Link>
      <div id="productName" style={{fontFamily:"NotoSansKR", fontSize:"2vw", fontWeight:"bold", width:"25vw"}}>{product.name}</div>
    </div>
  );
}


function StoreGrid({products}) {
  return (
    <div className="product-grid">
    
      {products.map(product => (
          <Store key={product.id} product={product} />
      ))}
      <div class="pointView" style={{textAlign:'center',fontSize:'3vw', margin:'10vh 0'}}>
        포인트가 2024년 3월 1일에 소멸될 예정이에요.
        </div>
    
    </div>
  );
}

export default StoreGrid;
