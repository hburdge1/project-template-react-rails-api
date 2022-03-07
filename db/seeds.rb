# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
b=User.create!(username: 'bananas', password: "acffff")
Icebreaker.create!(content: "What fictional family would you most like to join?", filled: true, user_id: b.id )
Icebreaker.create!(content: "Pick your favorite #{""} Tell us why.", filled: false, user_id: b.id )



# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
