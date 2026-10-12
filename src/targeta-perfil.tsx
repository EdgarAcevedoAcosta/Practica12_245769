interface TargetaPerfilProps {
  nombre: String;
  carrera: String;
  semestre: number;
}
export function targetaPerfil({ nombre, carrera, semestre }: TargetaPerfilProps) {
  const iniciales = nombre
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
  return (
    <div className="targeta-perfil">
      <div>{iniciales}</div>
      <h2>{nombre}</h2>
      <p>{carrera}</p>
      <p>{semestre}</p>
    </div>
  );
}
