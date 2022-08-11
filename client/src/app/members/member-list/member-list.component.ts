import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Observable } from 'rxjs';
import { Member } from 'app/_modules/member';
import { MembersService } from 'app/_services/members.service';
=======
import { Member } from 'app/_modules/member';
import { MembersService } from 'app/_services/members.service';

>>>>>>> 06815403296720439d2fae6b7092021bc79b0fe1

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members$: Observable<Member[]>;

  constructor(private memberService: MembersService) { }

  ngOnInit(): void {
    this.members$ = this.memberService.getMembers();
  }

}