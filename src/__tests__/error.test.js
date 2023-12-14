import ErrorRepository from '../error';

describe('ErrorRepository class', () => {
  it('should return error text if such error code is present', () => {
    const errorRep = new ErrorRepository();
    errorRep.errors.set(400, 'Bad Request');
    errorRep.errors.set(404, 'Not Found');
    errorRep.errors.set(503, 'Service Unavailable');

    expect(errorRep.translate(400)).toBe('Bad Request');
    expect(errorRep.translate(404)).toBe('Not Found');
    expect(errorRep.translate(503)).toBe('Service Unavailable');
  });

  it('should return string (Unknown error) if such error code is not present', () => {
    const errorRep = new ErrorRepository();
    errorRep.errors.set(400, 'Bad Request');

    expect(errorRep.translate(500)).toBe('Unknown error');
  });
});
