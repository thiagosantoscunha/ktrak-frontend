@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  private baseUrl: string = environment.base_url + '/v1/matriculas/alunos';

  constructor(private http: HttpClient) { }
}
