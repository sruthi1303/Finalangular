import { Component, OnInit } from '@angular/core';
import { ReviewDTO } from 'src/app/Models/ReviewDTO';
import { ReviewService } from 'src/app/service/review.service';

@Component({
  selector: 'app-completedreviewlist',
  templateUrl: './completedreviewlist.component.html',
  styleUrls: ['./completedreviewlist.component.css']
})
export class completedreviewlistComponent implements OnInit {

  switchValue = 3;


  constructor(private reviewService: ReviewService){}
  data: any
  ngOnInit(): void {
    this.GetReviewByStatus()

  }
  GetReviewByStatus(){
    this.reviewService.getReviewByStatus(3).subscribe(res => {
      console.log(res)
      this.data = res
    })
  }
}
