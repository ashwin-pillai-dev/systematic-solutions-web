import { Component,OnInit } from '@angular/core';
import axios from 'axios';

  


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css','../../assets/css/style.css','../../assets/css/responsive.css','../../assets/css/default.css','../../assets/css/slick.css','../../assets/css/animate.min.css','../../assets/css/magnific-popup.css','../../assets/css/fontawesome-all.min.css','../../assets/css/mb.YTPlayer.min.css']
})
export class BlogComponent {

  blogs: any[] =[];

  constructor() { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs() {
    // define the API endpoint URL
    const endpointUrl = 'http://localhost:3000/blogs';

    // define the query parameters as an object
    const queryParams = {
      limit: 10,
      page: 1
    };

    // make the Axios GET request with the endpoint URL and query parameters
    axios.get(endpointUrl, { params: queryParams })
      .then(response => {
        this.blogs = response.data.data; // set the blog data on the component's property
      })
      .catch(error => {
        console.error(error); // handle any errors here
      });
  }

}
