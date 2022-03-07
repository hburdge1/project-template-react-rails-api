# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
 OutlineList.create!(filled_portions: "What fictional family would you most like to join?", unfilled_portions: "What fictional #{noun} would you most like to #{verb}?")
 OutlineList.create!(filled_portions: "Pick your favorite decade. Tell us why." unfilled_portions: "Pick your favorite #{noun} Tell us why." )
 OutlineList.create!(filled_portions: "What is the most unusual job you have heard of?" unfilled_portions: "What is the most unusual #{noun} you have heard of?" )
 OutlineList.create!(unfilled_portions: "" )

# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
