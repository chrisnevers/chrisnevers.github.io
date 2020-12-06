import React from "react"
import Card from './Card'

const projects = [{
  title: 'Bitlib',
  description: 'An OCaml library to aid users in writing binary files.' +
    'This library is particularly useful for bytecode compilers ' +
    'when the user needs to convert decimals to binary sequences of ' +
    'certain lengths and endianness.',
  links: [
    {
      title: 'OPAM Package',
      href: 'https://opam.ocaml.org/packages/bitlib/'
    },
    {
      title: 'Source Code',
      href: 'https://github.com/chrisnevers/bitlib'
    }
  ],
  img: 'img/ocaml.png'
},
{
  title: 'OCamline',
  description: 'An OCaml library that provides a simple interface for ' +
    'reading user input. This project is particularly useful for REPLs. ' +
    'The user may specifiy brackets that must be closed before accepting ' +
    'input.',
  links: [
    {
      title: 'OPAM Package',
      href: 'https://opam.ocaml.org/packages/ocamline/'
    },
    {
      title: 'Source Code',
      href: 'https://github.com/chrisnevers/ocamline'
    }
  ],
  img: 'img/ocaml.png'
},
{
  title: 'Racket Compiler',
  description: 'A compiler for a statically typed language that produces x86 ' +
    'assembly. Features include: hygienic macros, garbage collection, ' +
    'register allocation, functions, closures, parametric polymorphism, ' +
    ' generalized algebraic data types, vectors, arrays, control flow, etc...',
  links: [
    {
      title: 'Source Code',
      href: 'https://github.com/chrisnevers/racket-compiler'
    }
  ],
  img: 'img/racket.png'
},
{
  title: 'JIT Compiler',
  description: 'A byte-code compiler for a small lazy language and its ' +
    'corresponding virtual machine. The VM is based on a CEK machine and has a ' +
    'stop and copy garbage collector included. The compiler is written in OCaml ' +
    'and the VM is written in C++.',
  links: [
    {
      title: 'Source Code',
      href: 'https://github.com/chrisnevers/jit-compiler'
    }
  ],
  img: 'img/ocaml.png'
},
{
  title: 'Type Inference',
  description: 'An implementation of Algorithm W, which performs type inference ' +
    'on an ML language. This algorithm generalizes functions without explicit ' +
    'parameterization. Implemented in OCaml.',
  links: [
    {
      title: 'Source Code',
      href: 'https://github.com/chrisnevers/type-inference'
    }
  ],
  img: 'img/ocaml.png'
},
{
  title: 'Scheme Interpreter',
  description: 'An implementation of a Scheme interpreter, as described in ' +
    'Write Yourself a Scheme. Implemented in Haskell.',
  links: [
    {
      title: 'Source Code',
      href: 'https://github.com/chrisnevers/scheme-interpreter'
    }
  ],
  img: 'img/haskell.png'
}
]

export default () => {
  return (
    <div className="section">
      <div className="col-lg-12">
        <h1>Projects</h1>
      </div>
      {projects.map(project => (
        <Card key={project.title} project={project} />
      ))}
    </div>
  );
}
