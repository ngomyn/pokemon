import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pokeDatas :any[] = []
  constructor(
    private data: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPokeData()
  }
  getPokeData(){
    this.data.getPokemon().subscribe(
      data => {
        const arr = [];
        data.results.forEach((i)=> {
          arr.push(this.data.getPokemonByName(i.name));

        })
        forkJoin(arr).subscribe(
          datas => {
            console.log(datas)
            this.pokeDatas = datas;
          },
          errs => console.log(errs)
        )
      },
      err => console.log(err)
    )
  }

  navigation(data){
    localStorage.setItem('pokedata',data);
    this.router.navigateByUrl('modal/dialog');
  }
}
