import { Component, OnInit } from '@angular/core';
import FullTranscript from '../../../model/Fulltranscript'
import { TranscriptService } from '../../../service/transcript.service'
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-fulltranscript',
  templateUrl: './fulltranscript.component.html',
  styleUrls: ['./fulltranscript.component.css']
})
export class FulltranscriptComponent implements OnInit {
 bangDiem:FullTranscript
  constructor(private ts: TranscriptService, private route: ActivatedRoute,private cookieService:CookieService) { }

  ngOnInit() {
    var id = this.route.snapshot.paramMap.get("id");
    this.ts.getfulltranscript(id).subscribe(data=>{
      let res=Object.assign(data)
      console.log(res)
      this.bangDiem=res.transcript.transcript
    })
    
  }

}
