class ResponsesController < ApplicationController

   def index
    render json: Response.all
  end

  def create
    icebreaker = Response.create!(icebreaker_params)
    render json: icebreaker, include: :responses, status: :created
  
  end
  def update(icebreaker_params)
          object = Icebreaker.find_by(params[:icebreaker_id])
          object.update_attributes(icebreaker_params)
          object.save!
   end
  
  private

  def icebreaker_params
    params.permit(:response, :icebreaker_id, :user_id)
  end


end
