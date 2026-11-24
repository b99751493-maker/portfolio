import React, { useState } from 'react';
import { BookOpen, Feather, Bookmark } from 'lucide-react';

const BOOKS = [
  { title: 'The Clockmaker of Prague', author: 'Clara Novak', genre: 'Historical Fiction', price: '$26', spine: '#6F4E37' },
  { title: 'Botany of Quiet Places', author: 'Arthur Finch', genre: 'Nature & Essays', price: '$22', spine: '#6B705C' },
  { title: 'Letters from the Observatory', author: 'Soren Lindqvist', genre: 'Literary Fiction', price: '$24', spine: '#4A3525' },
  { title: 'Architecture of Memory', author: 'Mei-Ling Zhou', genre: 'Philosophy', price: '$28', spine: '#555B47' },
];

const AUTHORS = [
  { name: 'Clara Novak', bio: 'Award-winning historical novelist exploring Central European archives.' },
  { name: 'Arthur Finch', bio: 'Naturalist and essayist chronicling ancient woodlands and botanical lore.' },
  { name: 'Soren Lindqvist', bio: 'Scandinavian storyteller known for lyrical, contemplative prose.' },
];

export default function Page12Booknest() {
  const [genre, setGenre] = useState('All');
  const filtered = genre === 'All' ? BOOKS : BOOKS.filter(b => b.genre === genre);

  return (
    <div className="min-h-screen bg-[#FAF3E0] text-[#3E2C1C] font-lora">
      {/* Header */}
      <header className="border-b border-[#6F4E37]/20 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <BookOpen className="w-6 h-6 text-[#6F4E37]" />
            <span className="font-merriweather font-bold text-2xl tracking-tight text-[#6F4E37]">BOOKNEST</span>
          </div>
          <span className="text-xs uppercase tracking-widest text-[#6B705C] font-semibold">
            Independent Literary Curators
          </span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-14 space-y-20">
        {/* Hero */}
        <section className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-[#6B705C] font-bold">Autumn Reading Room</span>
          <h1 className="font-merriweather text-4xl sm:text-6xl font-bold mt-3 leading-tight text-[#6F4E37]">
            Stories Bound to Endure.
          </h1>
          <p className="mt-4 text-lg text-[#3E2C1C]/80 leading-relaxed">
            Hover over any hardcover edition below to experience our 3D cover preview, or browse our curated literary shelves.
          </p>
        </section>

        {/* Genres & Horizontal Scroll Shelf with 3D Book Opening */}
        <section>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h2 className="font-merriweather text-2xl font-bold">New Arrivals</h2>
            <div className="flex flex-wrap gap-2">
              {['All', 'Historical Fiction', 'Nature & Essays', 'Literary Fiction', 'Philosophy'].map(g => (
                <button
                  key={g}
                  onClick={() => setGenre(g)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
                    genre === g ? 'bg-[#6F4E37] text-[#FAF3E0]' : 'bg-[#6F4E37]/10 text-[#6F4E37] hover:bg-[#6F4E37]/20'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-8 overflow-x-auto pb-8 pt-2">
            {filtered.map(book => (
              <div key={book.title} className="min-w-[260px] group perspective-1000">
                <div className="relative h-80 w-60 mx-auto">
                  {/* Inside Page */}
                  <div className="absolute inset-0 rounded-r-xl bg-white border border-[#6F4E37]/25 p-6 flex flex-col justify-between shadow-inner">
                    <p className="text-xs italic text-[#6B705C]">“Chapter I — The first snow fell softly over the old library roof...”</p>
                    <div>
                      <p className="font-bold text-sm">{book.price}</p>
                      <p className="text-[11px] text-[#6B705C]">Hardcover • 340 pages</p>
                    </div>
                  </div>

                  {/* 3D Opening Book Cover */}
                  <div
                    style={{ backgroundColor: book.spine }}
                    className="book-cover-3d absolute inset-0 rounded-r-xl text-[#FAF3E0] p-6 flex flex-col justify-between shadow-xl border-l-8 border-black/25"
                  >
                    <Bookmark className="w-5 h-5 text-[#FAF3E0]/80" />
                    <div>
                      <span className="text-[10px] uppercase tracking-widest opacity-75">{book.genre}</span>
                      <h3 className="font-merriweather text-xl font-bold mt-1 leading-snug">{book.title}</h3>
                    </div>
                    <p className="text-xs opacity-90">By {book.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Authors */}
        <section className="rounded-3xl bg-[#6B705C]/15 border border-[#6B705C]/25 p-8 sm:p-10">
          <h2 className="font-merriweather text-2xl font-bold mb-6 flex items-center gap-2 text-[#6F4E37]">
            <Feather className="w-5 h-5" /> Featured Authors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AUTHORS.map(a => (
              <div key={a.name} className="p-6 rounded-2xl bg-[#FAF3E0] border border-[#6F4E37]/15">
                <h3 className="font-merriweather font-bold text-lg text-[#6F4E37]">{a.name}</h3>
                <p className="text-sm text-[#3E2C1C]/80 mt-2 leading-relaxed">{a.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
