import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  review(review: any) {
    return this.http.post(`${this.apiUrl}/reviews`, review);
  }

  getReviews(): Observable<any> {
    return this.http.get(`${this.apiUrl}/reviews`);
  }
  getReviewById(reviewId: number) {
    const url = `${this.apiUrl}/reviews/${reviewId}`;
    return this.http.get(url);
  }
  deleteReview(reviewId: number) {
    const url = `${this.apiUrl}/reviews/${reviewId}`;
    return this.http.delete(url);
  }

  updateReview(reviewId: any, updatedReviewData: any) {
    console.log('review ID:', reviewId);
    console.log('Updated review Data:', updatedReviewData);

    const url = `${this.apiUrl}/reviews/${reviewId}`;
    return this.http.put(url, updatedReviewData);
  }
}
