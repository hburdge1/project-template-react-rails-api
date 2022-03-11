class ResponsesController < ApplicationController
    skip_before_action :verify_authenticity_token
   def index
    render json: Response.all
  end

  def create
    icebreaker = Response.create!(icebreaker_params)
    render json: :responses, status: :created
  
  end
  def update(icebreaker_params)
          object = Icebreaker.find_by(params[:icebreaker_id])
          object.update_attributes(icebreaker_params)
          render json: object
   end
  
  private

  def icebreaker_params
    params.permit(:response, :icebreaker_id, :user_id)
  end


end
