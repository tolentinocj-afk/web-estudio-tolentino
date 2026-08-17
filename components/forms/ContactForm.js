"use client";

/* ==========================================================================
   ContactForm — formulario de consulta
   --------------------------------------------------------------------------
   Validación en cliente con mensajes en español y envío a Web3Forms.

   PARA ACTIVAR EL ENVÍO:
   1. Crear una clave gratuita en https://web3forms.com indicando
      informes@tolentinoyasociados.com como correo de destino.
   2. Copiarla en el archivo .env.local del proyecto:
         NEXT_PUBLIC_WEB3FORMS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   Mientras la clave esté vacía, el formulario valida los campos y avisa que el
   envío todavía no está configurado, sin perder los datos escritos.

   ANTISPAM: campo oculto "botcheck" (honeypot). Los bots lo completan y el
   envío se descarta antes de salir del navegador.
   ========================================================================== */

import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { contacto, firm } from "@/content/site";

const CAMPOS_INICIALES = {
  nombre: "",
  empresa: "",
  ruc: "",
  correo: "",
  telefono: "",
  materia: "",
  mensaje: "",
  consentimiento: false,
  botcheck: "",
};

/* Reglas de validación, todas en español y específicas por campo */
function validar(v) {
  const e = {};

  if (!v.nombre.trim()) e.nombre = "Indica tu nombre completo.";
  else if (v.nombre.trim().length < 3) e.nombre = "El nombre es demasiado corto.";

  if (!v.correo.trim()) e.correo = "Indica un correo electrónico de contacto.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.correo.trim()))
    e.correo = "El formato del correo no es válido.";

  if (!v.telefono.trim()) e.telefono = "Indica un teléfono de contacto.";
  else if (!/^[\d\s()+-]{6,20}$/.test(v.telefono.trim()))
    e.telefono = "El teléfono solo admite números, espacios y los signos + ( ) -";

  // El RUC es opcional, pero si se completa debe tener 11 dígitos
  if (v.ruc.trim() && !/^\d{11}$/.test(v.ruc.trim()))
    e.ruc = "El RUC debe tener 11 dígitos.";

  if (!v.materia) e.materia = "Selecciona la materia de tu consulta.";

  if (!v.mensaje.trim()) e.mensaje = "Describe brevemente tu consulta.";
  else if (v.mensaje.trim().length < 15)
    e.mensaje = "Necesitamos un poco más de detalle (mínimo 15 caracteres).";

  if (!v.consentimiento)
    e.consentimiento = "Debes autorizar el tratamiento de tus datos.";

  return e;
}

export default function ContactForm({ materiaPorDefecto = "" }) {
  const [valores, setValores] = useState({
    ...CAMPOS_INICIALES,
    materia: materiaPorDefecto,
  });
  const [errores, setErrores] = useState({});
  const [estado, setEstado] = useState("inactivo"); // inactivo | enviando | ok | error | sinClave

  const cambiar = (e) => {
    const { name, value, type, checked } = e.target;
    setValores((v) => ({ ...v, [name]: type === "checkbox" ? checked : value }));
    // Limpia el error del campo apenas el usuario lo corrige
    if (errores[name]) setErrores((x) => ({ ...x, [name]: undefined }));
  };

  const enviar = async (e) => {
    e.preventDefault();

    // Trampa antispam: si viene completa, se descarta en silencio
    if (valores.botcheck) return;

    const e2 = validar(valores);
    setErrores(e2);
    if (Object.keys(e2).length > 0) {
      // Lleva el foco al primer campo con error
      const primero = document.getElementById(`campo-${Object.keys(e2)[0]}`);
      primero?.focus();
      return;
    }

    if (!contacto.web3formsKey) {
      setEstado("sinClave");
      return;
    }

    setEstado("enviando");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: contacto.web3formsKey,
          subject: `Nueva consulta web — ${valores.materia}`,
          from_name: `Web ${firm.nombreCorto}`,
          Nombre: valores.nombre,
          Empresa: valores.empresa || "No indicada",
          RUC: valores.ruc || "No indicado",
          Correo: valores.correo,
          Teléfono: valores.telefono,
          Materia: valores.materia,
          Mensaje: valores.mensaje,
          Consentimiento: "Otorgado conforme a la Ley 29733",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setEstado("ok");
        setValores({ ...CAMPOS_INICIALES, materia: materiaPorDefecto });
      } else {
        setEstado("error");
      }
    } catch {
      setEstado("error");
    }
  };

  /* --- Estilos compartidos de los campos -------------------------------- */
  const claseCampo = (campo) =>
    `w-full border bg-white px-4 py-3.5 text-[0.92rem] text-ink transition-colors duration-200 placeholder:text-muted/55 focus:outline-none ${
      errores[campo]
        ? "border-red-600/70 focus:border-red-600"
        : "border-line focus:border-bronze"
    }`;

  const Etiqueta = ({ htmlFor, children, opcional }) => (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-[0.72rem] font-semibold tracking-[0.14em] text-navy uppercase"
    >
      {children}
      {opcional && (
        <span className="ml-2 font-normal tracking-normal text-muted normal-case">
          (opcional)
        </span>
      )}
    </label>
  );

  const Error = ({ campo }) =>
    errores[campo] ? (
      <p role="alert" className="mt-2 text-[0.8rem] text-red-700">
        {errores[campo]}
      </p>
    ) : null;

  /* --- Confirmación de envío -------------------------------------------- */
  if (estado === "ok") {
    return (
      <div className="border border-bronze/40 bg-white p-10 text-center">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-bronze text-white">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h3 className="mt-6 font-serif text-2xl text-navy">
          Consulta recibida
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[0.92rem] leading-relaxed text-muted">
          Gracias por escribirnos. Un profesional del estudio revisará tu
          consulta y se comunicará contigo dentro del siguiente día hábil.
        </p>
        <button
          type="button"
          onClick={() => setEstado("inactivo")}
          className="mt-7 text-[0.75rem] font-semibold tracking-[0.14em] text-bronze uppercase hover:underline"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={enviar} noValidate className="space-y-6">
      {/* Honeypot antispam, invisible para las personas */}
      <input
        type="checkbox"
        name="botcheck"
        value={valores.botcheck}
        onChange={cambiar}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Etiqueta htmlFor="campo-nombre">Nombre completo</Etiqueta>
          <input
            id="campo-nombre"
            name="nombre"
            type="text"
            autoComplete="name"
            value={valores.nombre}
            onChange={cambiar}
            aria-invalid={!!errores.nombre}
            className={claseCampo("nombre")}
            placeholder="Nombres y apellidos"
          />
          <Error campo="nombre" />
        </div>

        <div>
          <Etiqueta htmlFor="campo-empresa" opcional>
            Empresa
          </Etiqueta>
          <input
            id="campo-empresa"
            name="empresa"
            type="text"
            autoComplete="organization"
            value={valores.empresa}
            onChange={cambiar}
            className={claseCampo("empresa")}
            placeholder="Razón social"
          />
        </div>

        <div>
          <Etiqueta htmlFor="campo-ruc" opcional>
            RUC
          </Etiqueta>
          <input
            id="campo-ruc"
            name="ruc"
            type="text"
            inputMode="numeric"
            maxLength={11}
            value={valores.ruc}
            onChange={cambiar}
            aria-invalid={!!errores.ruc}
            className={claseCampo("ruc")}
            placeholder="11 dígitos"
          />
          <Error campo="ruc" />
        </div>

        <div>
          <Etiqueta htmlFor="campo-telefono">Teléfono</Etiqueta>
          <input
            id="campo-telefono"
            name="telefono"
            type="tel"
            autoComplete="tel"
            value={valores.telefono}
            onChange={cambiar}
            aria-invalid={!!errores.telefono}
            className={claseCampo("telefono")}
            placeholder="(+51) 9XX XXX XXX"
          />
          <Error campo="telefono" />
        </div>

        <div className="sm:col-span-2">
          <Etiqueta htmlFor="campo-correo">Correo electrónico</Etiqueta>
          <input
            id="campo-correo"
            name="correo"
            type="email"
            autoComplete="email"
            value={valores.correo}
            onChange={cambiar}
            aria-invalid={!!errores.correo}
            className={claseCampo("correo")}
            placeholder="nombre@empresa.com"
          />
          <Error campo="correo" />
        </div>

        <div className="sm:col-span-2">
          <Etiqueta htmlFor="campo-materia">Materia de la consulta</Etiqueta>
          <select
            id="campo-materia"
            name="materia"
            value={valores.materia}
            onChange={cambiar}
            aria-invalid={!!errores.materia}
            className={`${claseCampo("materia")} select-brand`}
          >
            <option value="">Selecciona una materia</option>
            {contacto.materias.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          <Error campo="materia" />
        </div>

        <div className="sm:col-span-2">
          <Etiqueta htmlFor="campo-mensaje">Mensaje</Etiqueta>
          <textarea
            id="campo-mensaje"
            name="mensaje"
            rows={5}
            value={valores.mensaje}
            onChange={cambiar}
            aria-invalid={!!errores.mensaje}
            className={`${claseCampo("mensaje")} resize-y`}
            placeholder="Describe brevemente tu situación: qué ocurrió, qué entidad interviene y qué plazo tienes."
          />
          <Error campo="mensaje" />
        </div>
      </div>

      {/* --- Consentimiento de datos personales --------------------------- */}
      <div>
        <label
          htmlFor="campo-consentimiento"
          className="flex cursor-pointer items-start gap-3 text-[0.85rem] leading-relaxed text-muted"
        >
          <input
            id="campo-consentimiento"
            name="consentimiento"
            type="checkbox"
            checked={valores.consentimiento}
            onChange={cambiar}
            aria-invalid={!!errores.consentimiento}
            className="mt-1 h-4 w-4 flex-none accent-[#8A7355]"
          />
          <span>{contacto.consentimiento}</span>
        </label>
        <Error campo="consentimiento" />
      </div>

      {/* --- Mensajes de estado -------------------------------------------- */}
      {estado === "error" && (
        <p role="alert" className="border border-red-600/40 bg-red-50 px-4 py-3 text-[0.85rem] text-red-800">
          No pudimos enviar la consulta. Inténtalo nuevamente o escríbenos a{" "}
          <a href={`mailto:${firm.email}`} className="underline">
            {firm.email}
          </a>
          .
        </p>
      )}

      {estado === "sinClave" && (
        <p role="alert" className="border border-bronze/40 bg-paper-alt px-4 py-3 text-[0.85rem] text-ink">
          El formulario está correctamente completado, pero el servicio de envío
          todavía no está configurado. Falta cargar la clave de Web3Forms en el
          archivo <code className="font-mono text-[0.8rem]">.env.local</code>.
        </p>
      )}

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={estado === "enviando"}
          className="inline-flex items-center justify-center gap-2 bg-navy px-8 py-4 text-[0.8rem] font-semibold tracking-[0.14em] text-white uppercase transition-all duration-300 hover:bg-bronze disabled:cursor-not-allowed disabled:opacity-60"
        >
          {estado === "enviando" ? "Enviando..." : "Enviar consulta"}
          {estado !== "enviando" && <Icon name="flecha" className="h-4 w-4" />}
        </button>
        <p className="text-[0.78rem] leading-snug text-muted">
          Respuesta dentro del siguiente día hábil.
        </p>
      </div>
    </form>
  );
}
