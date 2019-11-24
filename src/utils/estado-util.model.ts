export abstract class EstadoUtil {
  static getBySigla(sigla: string): string {
      switch (sigla) {
          case 'RJ':
              return 'Rio de Janeiro';
          case 'ES':
              return 'Espirito Santos';
          case 'SP':
              return 'São Paulo';
          case 'MG':
              return 'Minas Gerais';
          default:
              throw new Error('Não foi possível encontrar o estado');
      }
  }
}
