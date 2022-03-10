class IcebreakersController < ApplicationController
  def index
    render json: Icebreaker.all
  end

  def show
    render json: Icebreaker.find_by(params[:icebreaker_id]), include: :response
  end

  def create
    icebreaker = @current_user.icebreakers.create!(icebreaker_params)
    render json: icebreaker, status: :created
  end

  private

  def icebreaker_params
    params.permit(:content)
  end
end
