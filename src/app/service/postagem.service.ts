import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root',
})
export class PostagemService {
  constructor(private http: HttpClient) {}

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token),
  };

  getAllPostagem(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(
      'http://localhost:8080/postagem',
      this.token
    );
  }

  getByIdPostagem(id: number): Observable<Postagem> {
    return this.http.get<Postagem>(
      `http://localhost:8080/postagem/${id}`,
      this.token
    );
  }

  getByTagPostagem(tag: string): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(
      `http://localhost:8080/postagem/tag/${tag}`,
      this.token
    );
  }

  getByDescricaoPostagem(descricao: string): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(
      `http://localhost:8080/postagem/descricao/${descricao}`,
      this.token
    );
  }

  postPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>(
      'http://localhost:8080/postagem',
      postagem,
      this.token
      );
    }
    
  putPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.put<Postagem>(
      'http://localhost:8080/postagem',
      postagem,
      this.token
    );
  }

  putInteracao(idPostagem: number){
    return this.http.put(`http://localhost:8080/postagem/${idPostagem}`, this.token)
  }

  deletePostagem(id: number) {
    return this.http.delete(`http://localhost:8080/postagem/${id}`, this.token);
  }

}
