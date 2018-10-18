/*Esse filtro faz uma simples verificação da existência de um usuário dentro da sessão
Se o usuário estive na session, será executado o callback return next()
responsável por pular este filtro e indo para a próxima função.*/

module.exports = function(req, res, next) {
  if(!req.session.usuario) {
    return res.redirect('/');
  }
  return next();
};
