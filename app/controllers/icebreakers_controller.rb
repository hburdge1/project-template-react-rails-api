class IcebreakersController < ApplicationController
  def index
    render json: Icebreaker.all
  end

  def update
          if @icebreaker.update(icebreaker_params)
            render json: @icebreaker
          end
   end

  def show
    render json: Icebreaker.find_by(params[:icebreaker_id]), include: :responses
  end

  def create
    icebreaker = @current_user.icebreakers.create!(icebreaker_params)
    render json: icebreaker, status: :created
  end

  private

  def icebreaker_params
    params.permit(:content, :flames, :favorite, :responses)
  end
end
