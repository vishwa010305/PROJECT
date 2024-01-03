import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../components/Home.css';
const Home =()=>{ 
    return(
        <>
        <form className="cont">
            <img src="https://image2.jdomni.in/banner/15112020/BA/AA/D6/7342D371795DD1601C53A0615C_1605453122587.jpg?output-format=webp"/>
            
        </form>
        <form className='txt'>
        <h2>Shop by age</h2>
        </form>
        <form className='age'> 
            <ul>
            
                <li><a href="https://www.funcorp.in/collections/0-12-months" className='age'><img src="https://www.funcorp.in/cdn/shop/files/0-12m_180x_a4542543-c305-435b-8944-7d2b15b7523e_170x.webp?v=1668157030"/></a></li>
                <li className='age'><img src="https://www.funcorp.in/cdn/shop/files/1-2_180x_4975aebf-4b8c-446d-a8a0-621ec4bee7bd_170x.jpg?v=1668164436"/></li>
                <li className='age'><img src="https://www.funcorp.in/cdn/shop/files/3-4_180x_88162e2a-e4b6-4fd8-9b33-59c82e7bf7cb_170x.jpg?v=1668162939"/></li>
                <li className='age'><img src="https://www.funcorp.in/cdn/shop/files/8-11_180x_32bdd88e-d87b-4872-bbfb-d8ca612077f9_170x.jpg?v=1668164019"/></li>
                <li><a href="https://www.funcorp.in/collections/age-12-14-years" className='age'><img src="https://www.funcorp.in/cdn/shop/files/12-14_180x_b75ef0fa-47fb-4a87-b4e9-a986d316ed2b_170x.webp?v=1668161779"/></a></li>
            </ul>
        </form>

        <form className='txt2'>
        <h2>MAJORETTE</h2>
        </form>
        <form className='fav'>
            <ul>
                
                <li><a href="https://www.funcorp.in/collections/beyblades"className='fav'><img src="https://www.funcorp.in/cdn/shop/files/Beyblade_burst_quaddrive_090523_940x.jpg?v=1683629088"/></a></li>
            </ul>
        </form>
        <form className='txt2'>
        <h2>OUTDOOR PLAY FOR KIDS</h2>
        </form>
        <form className='fav1'>
            <ul>
                
                <li className='fav1'><img src="https://toyfort.in/assets/img/OutdoorPlay/Outdoor-Play-Toy-Fort-Banner.jpeg"/></li>
            </ul>
           
        </form>
        <form className='txt2'>
        <h2>BRAND</h2>
        </form>
        <form className='fav2'>
        <ul>
    <li><a href="http://www.chennaitoys.com/search?srchval=nerf" class='fav2'><img src="https://image3.jdomni.in/banner/09112020/F8/59/B1/39CBE0DFC32D5ACF86D6CC9C92_1604934189836.png?output-format=webp" alt="Image 1"/></a></li>
    <li><a href="http://www.chennaitoys.com/search?srchval=lego" class='fav2'><img src="https://image3.jdomni.in/banner/09112020/AB/C1/71/7F9F2ECA9CDE52011310A4107D_1604935487881.png?output-format=webp" alt="Image 2"/></a></li>
    <li><a href="http://www.chennaitoys.com/search?srchval=hot%20wheels" class='fav2'><img src="https://image2.jdomni.in/banner/09112020/A9/5D/CA/94EB514BE287C3AE0C498BF011_1604934233814.png?output-format=webp" alt="Image 3"/></a></li>
    <li><a href="http://www.chennaitoys.com/funskool/cid-78449125-78710443" class='fav2'><img src="https://image3.jdomni.in/banner/09112020/60/DE/60/0474A3758BC6E92CE8932F8F66_1604934350441.png?output-format=webp" alt="Image 4"/></a></li>
</ul>

           
        </form>

        
      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2023 Toy Store</p>
        {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="contact-info">
            <h3>Contact Us</h3>
            <p>Email: VISHWA@gmail.com</p>
            <p>Phone:6374270484</p>
          </div>

          <div className="links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">Terms and Conditions</a></li>
              
            </ul>
            <ul>
            <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="social-media">
            <h3>Follow Us</h3>
            <ul>
              <li><a href="#" target="_blank" rel="noopener noreferrer"><FacebookIcon/></a></li>
            </ul>
            <ul>
            <li><a href="#" target="_blank" rel="noopener noreferrer"><InstagramIcon/></a></li>
            </ul>
          </div>
        </div>

        
      </footer>
      </footer>
        
        </>
    )
}

export default Home