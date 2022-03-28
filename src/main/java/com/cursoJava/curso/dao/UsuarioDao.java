package com.cursoJava.curso.dao;

import com.cursoJava.curso.models.Usuario;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface UsuarioDao {
    List<Usuario> getUsuarios();
    void eliminarUsuario(Long id);

    void registrar(Usuario usuario);

    Usuario obtenerLogIn(Usuario usuario);
}
