import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private setAllPokemons: any;
  public getAllPokemons: any;
  carregarError: boolean = true;

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.pokeApiList.subscribe(
      res => {
        this.setAllPokemons = res.results
        this.getAllPokemons = this.setAllPokemons;
        this.carregarError = false;
        // console.log(this.getAllPokemons)
      },
      error => {
        this.carregarError = true;
      }
    )
  };

  getSearch(value: string){
    const filter = this.setAllPokemons.filter( (res: any) => {
      return !res.name.indexOf(value.toLocaleLowerCase());
    });

    this.getAllPokemons = filter;
  }
}
