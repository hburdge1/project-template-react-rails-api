class PhrasesController < ApplicationController
  def index
    render json: Recipe.all
  end

  def create
    phrase = @current_user.phrases.create!(phrase_params)
    render json: phrase, status: :created
  end

  private

  def phrase_params
    params.permit(:content)
  end
end
