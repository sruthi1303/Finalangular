import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../../service/review.service';

@Component({
  selector: 'app-scheduledreview',
  templateUrl: './scheduledreview.component.html',
  styleUrls: ['./scheduledreview.component.css']
})
export class ScheduledreviewComponent implements OnInit {
  Department:any;
  User:any;
  Users:any;
  StatusID=0;
  ReviewerID=0;
  TraineeID=0;




  constructor(private rs:ReviewService) { }
  
  StatusId=1;
  selectDept:any=0;
  reviewId:any=0;

  Review:any={
    id: 0,
    reviewerId: 0,
    statusId: 3,
    traineeId: 0,
    reviewDate: Date.now,
    reviewTime:0,
    mode: '',
    isDisabled:false
  }

  


  ngOnInit(): void {
    this.getAllDepartments();
    this.getAllReviewer();
     this.getAllUser();
      this.setoption();
    }

  setoption(){
    if(this.Review.id!=null){
      this.getAllReview();
    }
  }

  OnSubmit() {
     if(this.Review.id==0){
      console.log(this.Review)
    this.rs.postReview(this.Review).subscribe((res: any) => {
      console.log(res);
      this.Review(res);
    })
    }
    else{
      console.log(this.Review)
      this.rs.putReview(this.Review).subscribe((res: any) => {
        console.log(res);
        this.Review(res);
      })
    }
    
  }
  getAllReview(){
    this.rs.getReviewById(1).subscribe(a=>{
      console.log(a)
      this.Review = a
    })
  }
  getAllDepartments(){
    this.rs.getAllDepartments().subscribe(a=>{
      console.log(a)
      this.Department = a
    })
  }
  getAllReviewer(){
    this.rs.getAllReviewer(5).subscribe(a=>{
      console.log(a)
      this.User = a
    })
  }
  getAllUser(){
    this.rs.getAllUser(this.selectDept,4).subscribe(a=>{
      console.log(a)
      this.Users = a
    })
  }

 

}
